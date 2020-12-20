puzzle_input = open(
    './2020/day18/puzzle_input.txt'
).read().strip().split('\n')

ans = 0


def foo(x, op, y):
    if op == '*':
        return x * y
    return x + y


def bar(exp):
    while len(exp) > 1:
        x = int(exp.pop())
        op = exp.pop()
        y = int(exp.pop())

        exp.append(str(foo(x, op, y)))

    return exp[0]


for line in puzzle_input:

    exp = line.replace('(', '( ').replace(')', ' )').split()

    stack = []

    for ch in exp:
        if ch.isdigit() or ch in ['+', '*', '(']:
            stack.append(ch)
        elif ch == ')':
            ordered = []
            while stack[len(stack)-1] != '(':
                ordered.append(stack.pop())
            stack.pop()

            stack.append(bar(ordered))

    stack.reverse()

    ans += int(bar(stack))


print(ans)
