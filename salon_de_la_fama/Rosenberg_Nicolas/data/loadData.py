import csv
import json
with open ('sports_fandom.csv') as file:
    csv_reader = csv.reader(file, delimiter=',')
    cities = {}
    for line in csv_reader:
        if line[0] != "DMA":
            name = line[0].strip().replace(',', '')
            sports = {'NFL': int(line[1][:-1]), 'NBA': int(line[2][:-1]), 'MLB': int(line[3][:-1]), 'NHL': int(line[4][:-1]), 'NASCAR': int(line[5][:-1]), 'CBB': int(line[6][:-1]),'CFB': int(line[7][:-1]) }
            most = min(sports, key = lambda k: sports[k])
            cities[name] = {'NFL': int(line[1][:-1]), 'NBA': int(line[2][:-1]), 'MLB': int(line[3][:-1]), 'NHL': int(line[4][:-1]), 'NASCAR': int(line[5][:-1]), 'CBB': int(line[6][:-1]),'CFB': int(line[7][:-1]), 'most': most }
            


with open ('citiesData.json', 'w') as json_file:
    json.dump(cities, json_file)