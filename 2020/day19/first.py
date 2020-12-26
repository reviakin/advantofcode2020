with open('./2020/day19/puzzle_input.txt') as puzzle_input:
    data =  puzzle_input.readlines()

    data = [line.strip() for line in data]

    rules = data[:data.index('')]
    msgs = data[data.index('')+1:]

# Rules' dict.
R = {}
# Cache dict.
M = {}

for rule in rules:
    k,options_str = rule.split(': ')
    k = int(k)
    options = []
    options_str = options_str.split(' | ')
    for op in options_str:
        options.append(op.split())

    R[k] = options


def foo(name:int):
    options_str = R[name]

    if ['"a"'] in options_str:
        return ['a']
    elif ['"b"'] in options_str:
        return ['b']

    if name in M:
        return M[name]

    ans = []
    for option_str in options_str:
        strOps = []
        
        for rule in option_str:
            subOps = foo(int(rule))

            if len(strOps) == 0:
                strOps = subOps.copy()
            else:
                combined  = []
                for s in subOps:
                    for op1 in strOps:
                        combined.append(op1+s)
                strOps = combined.copy()
        ans += strOps

    M[name] = ans
    return ans

# store pasabilities in a set
all_pasabilities = foo(0)
all_pasabilities_set = set()
for p in all_pasabilities:
    all_pasabilities_set.add(p)

ans = 0
for m in msgs:
    if m in all_pasabilities_set:
        ans += 1
        
print(ans)