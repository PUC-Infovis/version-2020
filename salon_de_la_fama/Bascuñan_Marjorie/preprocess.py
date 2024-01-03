import pandas as pd

df = pd.read_csv('meat_consumption_worldwide.csv')
df = df[df['MEASURE'] == 'KG_CAP'] # se ocupa los kilos per capita
# se crea una columna con las equivalencias de contaminacion en kg de co2 equivalente por kilo per capita
new_col = []
for row in df.itertuples():
    if row.SUBJECT == 'BEEF':
        new_col.append(row.Value * (10 / 7) * 46.2) # average global
    elif row.SUBJECT == 'SHEEP':
        new_col.append(row.Value * (10 / 8.8) * 24) # average global
    elif row.SUBJECT == 'POULTRY':
        new_col.append(row.Value * (10 / 8.8) * 5.4) # average global
    elif row.SUBJECT == 'PIG':
        new_col.append(row.Value * (10 / 7.8) * 6.1) # average global kg_CO2_eq

df['CO2'] = new_col
del df['MEASURE']
print(df)
df.to_csv('meat_co2.csv', index=False)
# equivalencias sacadas de la fao

################ preprocess json #########################

import json 

with open("paises.json", "rt") as archivo:
    paises = json.load(archivo)

with open("capitals.geojson", "rt") as archivo:
    capitals = json.load(archivo)
visitados = []
consumos = {}
for row in df.itertuples():
    for pais in paises["features"]:
        cod = pais["properties"]["ISO_A3"]
        if cod == row.LOCATION:
            # if row.LOCATION in visitados:
            #     continue
            print("Encontrado:", row.LOCATION)
            if cod in consumos:
                consumos[cod] += float(row.Value) if row.Value else 0
            else:
                consumos[cod] = float(row.Value) if row.Value else 0
            
            for cap in capitals['features']:
                if cap['properties']['iso3'] == cod and cod not in visitados:
                    pais["properties"]["capital"] = cap['geometry']['coordinates']
            visitados.append(row.LOCATION)

for pais in paises['features']:
    if pais["properties"]["ISO_A3"] in consumos:
        pais['properties']['consumo_ag'] = consumos[pais["properties"]["ISO_A3"]]

with open("paises_con_consumo.json", "wt") as archivo:
    json.dump(paises, archivo)