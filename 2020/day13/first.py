import math

file_input = open('./2020/day13/input.txt').read().strip().split('\n')

my_timestamp = int(file_input[0:1][0])
bus_IDs = file_input[1:][0].split(',')

earliest_b = None
earliest_v = None

for x in bus_IDs:
    if x == 'x':
        continue

    bus_id = int(x)

    x = bus_id * math.ceil(my_timestamp/bus_id)

    if earliest_b is None:
        earliest_b = bus_id
        earliest_v = x
    elif x < earliest_v:
        earliest_b = bus_id
        earliest_v = x


print((earliest_v-my_timestamp)*earliest_b)
