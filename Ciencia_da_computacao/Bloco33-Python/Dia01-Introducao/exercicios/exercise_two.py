def average(number_list):
    sum = 0
    list_length = len(number_list)

    for number in number_list:
        sum += number

    return sum / list_length


print(average([5, 2, 7, 9, 8]))
