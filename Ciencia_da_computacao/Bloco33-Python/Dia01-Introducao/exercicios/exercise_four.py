def biggest_name(names_list):
    biggest_name_in_list = ""
    for name in names_list:
        if len(name) > len(biggest_name_in_list):
            biggest_name_in_list = name

    return biggest_name_in_list


print(biggest_name(["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]))
