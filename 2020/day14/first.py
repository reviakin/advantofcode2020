file_input = open('./2020/day14/input.txt').read().strip().split('\n')

mem = {}

for command in file_input:
    if command.startswith('mask'):
        mask = command.split(' = ')[1]

        mask0 = int(mask.replace("X", '0'), 2)
        mask1 = int(mask.replace("X", '1'), 2)
    else:
        adress = int(command.split(']')[0][4:])
        value = int(command.split(']')[1].split(' = ')[1])
        mem[adress] = (value | mask0) & mask1

ans = 0
for v in mem.values():
    ans += v

print(ans)
