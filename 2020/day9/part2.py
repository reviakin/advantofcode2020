input = open('./2020/day9/input.txt').read().strip().split('\n')


def made_number(string):
    result = int(string)
    return result


input_list = [made_number(v) for v in input]

# print(input_list)
# print(input_list[26])


def have_two_of_list_sum(xs, sum):
    i = 0

    while i < len(xs):
        a = xs[i]
        j = 0
        while j < len(xs):
            b = xs[j]
            if j == i:
                j = j + 1
                continue
            print('a:', a, 'b:', b, 'sum', sum)
            if a + b == sum:
                return True
            j = j + 1
        i = i + 1

    print('i:', i, 'j:', j)
    return False


def solve_step1(input_list):
    position = 25
    length = 25

    while position < len(input_list):
        start_position = position - length

        is_valid = have_two_of_list_sum(
            input_list[start_position: position], input_list[position])

        print('start_position: ', start_position)
        print('position: ', position)
        print('sum: ', input_list[position])
        print(input_list[start_position:position],
              len(input_list[start_position:position]))

        if is_valid == False:
            print('novalid index: ', position)
            break

        position = position + 1

    return [input_list[position], position]


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
            finish_position = start_position

        if sum == target_value:
            print('XMAS')
            print('start: ', start_position,
                  'finish: ', finish_position)

            return min(input_list[start_position:finish_position]) + max(input_list[start_position:finish_position])

        if start_position == target_position:
            print('touched target position')
            break

    return False


step_2 = solve_step2(input_list, solve_step1(input_list))

print(step_2)
