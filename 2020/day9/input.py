
def made_number(string):
    result = int(string)
    return result


input = [made_number(v) for v in open(
    './2020/day9/input.txt').read().strip().split('\n')]
