export function createRegionLabel(data, x, y, width, svg, color){
    let region = {
        "1": "Kanto",
        "2": "Johto",
        "3": "Hoenn",
        "4": "Sinnoh",
        "5": "Unova",
        "6": "Kalos",
        "7": "Alola",
        "8": "Galar"
    }

    svg.append('rect')
        .attr('rx', 20)
        .attr('ry', 20)
        .attr('x', x)
        .attr('y', y)
        .attr('height', 40)
        .attr('width', width)
        .attr('fill', color)
        .attr('stroke', ' #141414')
        .attr('stroke-width', 1)

    svg.append('rect')
        .attr('rx', 20)
        .attr('ry', 20)
        .attr('x', x + 1.25*width/3)
        .attr('y', y)
        .attr('height', 40)
        .attr('width', 1.75*width/3)
        .attr('fill', 'white')

    svg.append('rect')
        .attr('x', x+ 1.25*width/3)
        .attr('y', y)
        .attr('height', 40)
        .attr('width', 20)
        .attr('fill', 'white')

    svg.append('line')
        .attr('x1', x + 1.25*width/3)
        .attr('y1', y)
        .attr('x2', x + 1.25*width/3)
        .attr('y2', y + 40)
        .attr('stroke', '#141414')
        .attr('stroke-width', 1)

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + (1.25*width/3)/2)
        .attr('y', y + 25)
        .text("Region:")
        .attr('width', 1.25*width/3 - 10)
        .attr('fill', 'white')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + (1.25*width/3) + (1.75*width/3)/2 - 5)
        .attr('y', y + 25)
        .text(region[data["generation"]])
        .attr('width', (1.75*width/3)/2 - 10)
        .attr('fill', '#141414')
}

function addGeneralLines(svg, x, y, width){
    svg.append('line')
        .attr('x1', x)
        .attr('y1', y + 28)
        .attr('x2', x + width)
        .attr('y2', y + 28)
        .attr('stroke', '#141414')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', x)
        .attr('y1', y + 56)
        .attr('x2', x + width)
        .attr('y2', y + 56)
        .attr('stroke', '#141414')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', x)
        .attr('y1', y + 84)
        .attr('x2', x + width)
        .attr('y2', y + 84)
        .attr('stroke', '#141414')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', x)
        .attr('y1', y + 112)
        .attr('x2', x + width)
        .attr('y2', y + 112)
        .attr('stroke', '#141414')
        .attr('stroke-width', 1)

    svg.append('line')
        .attr('x1', x + width/2)
        .attr('y1', y + 28)
        .attr('x2', x + width/2)
        .attr('y2', y + 140)
        .attr('stroke', '#141414')
        .attr('stroke-width', 1)
};

function addGeneralPercentage(data, x, y, width, svg){
    if (data["percentage_male"]){
        svg.append('text')
            .attr('text-anchor', 'start')
            .attr('x', x + width/16 + 5)
            .attr('y', y + 48)
            .text(`${parseInt(data["percentage_male"])}%`)
            .attr('font-size', 12)
            .attr('fill', '#141414')

        svg.append("svg:image")
            .attr('x', x + 5)
            .attr('y', y + 36)
            .attr('width', 12)
            .attr('height', 12)
            .attr("xlink:href", `./assets/images/male.png`)

        svg.append('text')
            .attr('text-anchor', 'start')
            .attr('x', x + 5*width/16)
            .attr('y', y + 48)
            .text(`${100 - parseInt(data["percentage_male"])}%`)
            .attr('font-size', 12)
            .attr('fill', '#141414')

        svg.append("svg:image")
            .attr('x', x + width/4)
            .attr('y', y + 36)
            .attr('width', 12)
            .attr('height', 12)
            .attr("xlink:href", `./assets/images/female.png`)

    } else{
        svg.append('text')
            .attr('text-anchor', 'middle')
            .attr('x', x + width/4)
            .attr('y', y + 48)
            .text(`Not gendered`)
            .attr('font-size', 12)
            .attr('fill', '#141414')
    }

}

function addGeneralText(data, x, y, width, svg){
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + 3*width/4)
        .attr('y', y + 48)
        .text(`Weight: ${data["weight_kg"]} Kg.`)
        .attr('font-size', 12)
        .attr('fill', '#141414')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + width/4)
        .attr('y', y + 76)
        .text(`Egg Cycles: ${data["egg_cycles"]}`)
        .attr('font-size', 12)
        .attr('fill', '#141414')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + 3*width/4)
        .attr('y', y + 76)
        .text(`Height: ${data["height_m"]} m.`)
        .attr('font-size', 12)
        .attr('fill', '#141414')
    
    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + width/4)
        .attr('y', y + 104)
        .text(`B. Exp.: ${data["base_experience"]}`)
        .attr('font-size', 12)
        .attr('fill', '#141414')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + 3*width/4)
        .attr('y', y + 104)
        .text(`B. Friendship: ${data["base_friendship"]}`)
        .attr('font-size', 12)
        .attr('fill', '#141414')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + width/4)
        .attr('y', y + 132)
        .text(`Catch Rate: ${data["catch_rate"]}`)
        .attr('font-size', 12)
        .attr('fill', '#141414')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + 3*width/4)
        .attr('y', y + 132)
        .text(`${data["growth_rate"]}`)
        .attr('font-size', 12)
        .attr('fill', '#141414')

    addGeneralPercentage(data, x, y, width, svg);
}

export function createGeneralLabel(data, x, y, width, svg, color){
    svg.append('rect')
        .attr('rx', 20)
        .attr('ry', 20)
        .attr('x', x)
        .attr('y', y)
        .attr('height', 140)
        .attr('width', width)
        .attr('fill', color)
        .attr('stroke', ' #141414')
        .attr('stroke-width', 1)

    svg.append('rect')
        .attr('rx', 20)
        .attr('ry', 20)
        .attr('x', x)
        .attr('y', y + 28)
        .attr('height', 112)
        .attr('width', width)
        .attr('fill', 'white')

    svg.append('rect')
        .attr('x', x)
        .attr('y', y + 28)
        .attr('height', 28)
        .attr('width', width)
        .attr('fill', 'white')

    addGeneralLines(svg, x, y, width)

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', x + (width/2))
        .attr('y', y + 20)
        .text("General Information:")
        .attr('width', width - 10)
        .attr('fill', 'white')

    addGeneralText(data, x, y, width, svg)
}