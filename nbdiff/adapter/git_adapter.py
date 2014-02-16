__author__ = 'root'

import sys
import subprocess
from .vcs_adapter import VcsAdapter


class GitAdapter(VcsAdapter):

    def get_modified_files(self):
        pass

    def get_modified_notebooks(self):
        return super().get_unmerged_notebooks()

    def get_unmerged_files(self):

        output = subprocess.check_output("git ls-files --unmerged".split())
        output_array = [line.split() for line in output.splitlines()]

        if len(output_array) % 3 != 0:  # should be something else
            sys.stderr.write(
                "Can't find the conflicting notebook. Quitting.\n")
            sys.exit(-1)

        result = []

        for index in xrange(0, len(output_array), 3):
            local_hash = output_array[index + 1][1]
            base_hash = output_array[index][1]
            remote_hash = output_array[index + 2][1]
            file_name = output_array[index][3]
            result.append((local_hash, base_hash, remote_hash, file_name))

        result_file_hooks = []

        for hash in result:
            local = subprocess.Popen(
                ['git', 'show', hash[0]],
                stdout=subprocess.PIPE
            )
            base = subprocess.Popen(
                ['git', 'show', hash[1]],
                stdout=subprocess.PIPE
            )
            remote = subprocess.Popen(
                ['git', 'show', hash[2]],
                stdout=subprocess.PIPE
            )
            file_name = hash[3]
            result_file_hooks.append((local, base, remote, file_name))

        return result_file_hooks

    def get_unmerged_notebooks(self, file_hooks):
        return super().get_unmerged_notebooks(file_hooks)

    def stage_file(self, file, contents=None):
        pass