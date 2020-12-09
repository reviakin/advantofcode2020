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


def solve(input_list):
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
            print('no valid', 'index: ', position)
            break

        position = position + 1

    return input_list[position]


print(solve(input_list))
