from input import input


def have_two_of_list_sum(xs, sum):
    i = 0
    xs_set = set(xs)

    for x in xs_set:
        delta = sum - x
        if delta in xs_set and delta != x:
            return True

    return False


# o(n^2)

# def have_two_of_list_sum(xs, sum):
#     i = 0
#     while i < len(xs):
#         a = xs[i]
#         j = 0
#         while j < len(xs):
#             b = xs[j]
#             if j == i:
#                 j = j + 1
#                 continue
#             print('a:', a, 'b:', b, 'sum', sum)
#             if a + b == sum:
#                 return True
#             j = j + 1
#         i = i + 1
#     print('i:', i, 'j:', j)
#     return False


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


step1_result = solve_step1(input)

print(step1_result)
