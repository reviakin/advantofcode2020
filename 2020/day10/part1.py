from input import input

sorted_input = sorted(input)

# print(sorted_input)


def solve_part1(input_list):
    current = 0
    one_d = 0
    three_d = 0
    for y in input_list:
        delta = y - current

        if delta == 1:
            one_d += 1
        if delta == 3:
            three_d += 1

        current = y

    return one_d * (three_d + 1)


step1_result = solve_part1(sorted_input)

print(step1_result)
