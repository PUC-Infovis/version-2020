import pandas as pd
import csv
import json
import os
print(os.listdir())
characters_dict = {}
with open('Characters.csv', "r", encoding='utf-8', errors='ignore') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            characters_dict[int(row[0])] = row[1]
            line_count += 1

# print(characters_dict)

def detect_name(sobrenombre, characters_dict):

    if "," in sobrenombre:
        nombres = sobrenombre.split(",")
        lista_listas = [detect_name(personaje, characters_dict) for personaje in nombres]
        flat_list = []
        for sublist in lista_listas:
            for item in sublist:
                flat_list.append(item)
        return flat_list

    else:
        lista_sobrenombre = sobrenombre.split(" ")
        lista_sobrenombre = [x.lower() for x in lista_sobrenombre]
        for idx,possible_char in characters_dict.items():
            lista_posible_nombre = possible_char.split(" ")
            lista_posible_nombre = [x.lower() for x in lista_posible_nombre]
            if set(lista_sobrenombre) <= set(lista_posible_nombre):
                return [possible_char]

        #print(sobrenombre)
        return ['Others']

dict_HP1 = {'Others': 0}
with open('Harry_Potter_1.csv', "r", encoding='utf-8', errors='ignore') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            sobrenombre = row[0]
            real_name_list = detect_name(sobrenombre, characters_dict)

            for real_name in real_name_list:
                if real_name not in dict_HP1.keys():
                    dict_HP1[real_name] = 1
                else:
                    dict_HP1[real_name] += 1
                line_count += 1
print("Dialogos totales HP1", line_count - 1)
HP1 = line_count - 1



dict_HP2 = {'Others': 0}
with open('Harry_Potter_2.csv', "r", encoding='utf-8', errors='ignore') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            sobrenombre = row[0]
            real_name_list = detect_name(sobrenombre, characters_dict)

            for real_name in real_name_list:
                if real_name not in dict_HP2.keys():
                    dict_HP2[real_name] = 1
                else:
                    dict_HP2[real_name] += 1
                line_count += 1
print("Dialogos totales HP2", line_count - 1)
HP2 = line_count - 1

dict_HP3 = {'Others': 0}
with open('Harry_Potter_3.csv', "r", encoding='utf-8', errors='ignore') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            sobrenombre = row[0]
            real_name_list = detect_name(sobrenombre, characters_dict)

            for real_name in real_name_list:
                if real_name not in dict_HP3.keys():
                    dict_HP3[real_name] = 1
                else:
                    dict_HP3[real_name] += 1
                line_count += 1
print("Dialogos totales HP3", line_count - 1)
HP3 = line_count - 1

dict_HP4 = {'Others': 0}
with open('Harry_Potter_4.csv', "r", encoding='utf-8', errors='ignore') as csv_file:
    csv_reader = csv.reader(csv_file, delimiter=';')
    line_count = 0
    for row in csv_reader:
        if line_count == 0:
            line_count += 1
        else:
            sobrenombre = row[0]
            real_name_list = detect_name(sobrenombre, characters_dict)

            for real_name in real_name_list:
                if real_name not in dict_HP4.keys():
                    dict_HP4[real_name] = 1
                else:
                    dict_HP4[real_name] += 1
                line_count += 1
print("Dialogos totales HP4", line_count - 1)
HP4 = line_count - 1

def find_key(val, my_dict):
    if val == 'Others':
        return 0
    key_list = list(my_dict.keys()) 
    val_list = list(my_dict.values())
    return key_list[val_list.index(val)]


fd_HP1 = []
for i,v in dict_HP1.items():
    new_dict = {'id': find_key(i, characters_dict), 'name': i, 'val': v}
    fd_HP1.append(new_dict)

fd_HP2 = []
for i,v in dict_HP2.items():
    new_dict = {'id': find_key(i, characters_dict), 'name': i, 'val': v}
    fd_HP2.append(new_dict)

fd_HP3 = []
for i,v in dict_HP3.items():
    new_dict = {'id': find_key(i, characters_dict), 'name': i, 'val': v}
    fd_HP3.append(new_dict)

fd_HP4 = []
for i,v in dict_HP4.items():
    new_dict = {'id': find_key(i, characters_dict), 'name': i, 'val': v}
    print(new_dict)
    fd_HP4.append(new_dict)


final_dict = {
    1: {
        'total_dialogs': HP1, 'distribution': fd_HP1, 
    },
    2: {
        'total_dialogs': HP2, 'distribution': fd_HP2, 
    },
    3: {
        'total_dialogs': HP3, 'distribution': fd_HP3, 
    },
    4: {
        'total_dialogs': HP4, 'distribution': fd_HP4, 
    },
}


with open('dialogs_v2.json', 'w') as fp:
    json.dump(final_dict, fp)