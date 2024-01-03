# Exámen

### Por: Gerardo Crot Rojas
### IIC2026 - 2020-2

---

## Consideraciones

Para este exámen se crearon 2 archivos **HTML** como se pedía. El informe se encuentra en el archivo `index.html`, y la visualización está en el archivo `visualization.html`. Ambas se encuentran en la raíz de la carpeta y se puede acceder a estas 2 a travéz de cada una.

Para abrir el exámen se recomimenda utilizar un servidor local. Al momento de desarrollarlo se usó el que provee *Python 3* mediante el comando:

````
python3 -m http.server
````

Luego, se debe abrir en su navegador favorito la ruta `localhost:8000`, y se abrirá el informe como el archivo `index.html`, dentro de la barra de navegación se puede ir hacia la visualización.

Esta visualización se implementó usando dos dataset extraídos desde kaggle (sus links están referenciados en la vista), donde uno traía imágenes y otro datos de las estadísticas del juego de pokémon. Como ambos dataset estaban incompletos (imágenes hasta 6ta generación de pokémon, y las estadísticas no tenían información completa de la 8va generación y le faltaban los últimos DLC) se rellenaron manualmente dentro de los dataset. Además, se editaron (manualmente también) para hacer calzar los nombres con los id de número de pokédex, y que de esta forma se pueda realizar un join entre ambos datasets.

Esta todo implementado, y si alguno es tan fanático de pokémon como yo, estoy seguro que esta visualización les puede servir y la pueden guardar localmente (y si me lo piden quizás modificarla para subirla a un servidor e irlo actualizando).