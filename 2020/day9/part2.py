from part1 import step1_result
from input import input


def foo(input_list):
    input_result = 0
    for x in input_list:
        input_result += x

    return input_result


def solve_step2(input_list, step1):
    [target_value, target_position] = step1
    start_position = 0
    finish_position = 0
    while start_position < len(input_list):

        sum = foo(input_list[start_position:finish_position])
        if sum < target_value:
            finish_position += 1

        if sum > target_value:
            start_position += 1

        if sum == target_value:
            print('XMAS')
            print('start: ', start_position,
                  'finish: ', finish_position)

            return min(input_list[start_position:finish_position]) + max(input_list[start_position:finish_position])

        if start_position == target_position:
            print('touched target position')
            break

    return False


step_2 = solve_step2(input, step1_result)

print(step_2)
