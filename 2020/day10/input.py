
def made_number(string):
    result = int(string)
    return result


input = [made_number(v) for v in open(
    './2020/day10/input.txt').read().strip().split('\n')]
