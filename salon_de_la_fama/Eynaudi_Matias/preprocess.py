import json
import os

# --- Pokemon stats (More data)
def create_jsons_for_visualization():
  pokestats = {}

  with open("pokePd.csv", 'r') as file:
    headers = file.readline().strip('\n').split(',')
    for line in file:
      data = line.strip('\n').replace("', ", "&").split(',')
      pokestats[data[1]] = {}
      for (index, header) in enumerate(headers):
        pokestats[data[1]][header] = data[index]

  pokedefense = {}
  names_in_defense = []
  # --- Deffense against attacks

  with open("PokeTypeMatchupData.csv", 'r') as file2:
    types = file2.readline().strip("\n").split(",")
    for line in file2:
      data = line.strip('\n').replace("', ", "&").split(',')
      pokedefense[data[0]] = {}
      names_in_defense.append(data[0])
      for (index, header) in enumerate(types):
        pokedefense[data[0]][header] = data[index]
      


  for key in pokestats:
    pokestats[key]['Type'] = pokestats[key]['Type'].strip('"[]"').replace("'", '').split("&")

  final_pokemon_stats = {}
  final_pokemon_defenses = {}

  for key in pokestats:
    if key in names_in_defense:
      final_pokemon_stats[key] = pokestats[key]

  for key in pokedefense:
    if key in final_pokemon_stats.keys():
      final_pokemon_defenses[key] = pokedefense[key]

  print(final_pokemon_defenses["Bulbasaur"])
  print(final_pokemon_stats["Bulbasaur"])

  print(final_pokemon_defenses.__len__())
  print(final_pokemon_stats.__len__())

  with open("poke_stats.json", "w") as stats:
    json.dump(final_pokemon_stats, stats)

  with open("poke_def.json", 'w') as defs:
    json.dump(final_pokemon_defenses, defs)


def delete_pokemon_without_image() :
  noname = []
  new_json = {}
  with open("poke_def.json", 'r') as file:
    pokemons_def = json.load(file)
    images = os.listdir("./images")
    images_name = [x.strip(".png") for x in images]
    for name in pokemons_def.keys():
      if name.lower() in images_name:
        new_json[name] = pokemons_def[name]
  
  with open("poke_def.json", 'w') as file:
    json.dump(new_json, file)

  with open("poke_stats.json", 'r') as file:
    pokemons_def = json.load(file)
    images = os.listdir("./images")
    images_name = [x.strip(".png") for x in images]
    for name in pokemons_def.keys():
      if name.lower() in images_name:
        new_json[name] = pokemons_def[name]
  
  with open("poke_stats.json", 'w') as file:
    json.dump(new_json, file)
