export function createHex(svg, cx,cy, r, hexR, data, maxStats){
    const spiderColor = {
        0: "#A8A878",
        100: "#CD7F32",
        200: "#BEC2CB",
        300: "#D4AF37",
        400: "#0F52BA",
        500: "#CB2D2D",
        600: "#50c878",
        "bigger": "#9966CC"
    }

    const spider = svg.append('circle')
        .attr('cx', cx)
        .attr('cy', cy)
        .attr('r', r)
        .attr('stroke', 'black')
        .attr('stroke-width', '1')
        .attr('fill', 'white')

    svg.append('path')
        .attr('d', `M ${cx}, ${cy}
                    l 0, ${hexR}
                    l ${Math.sin(Math.PI*(2/3))*hexR}, ${Math.cos(Math.PI*(2/3))*hexR}
                    L ${cx}, ${cy}
                    m ${Math.sin(Math.PI*(2/3))*hexR}, ${-Math.cos(Math.PI*(2/3))*hexR}
                    l 0, ${-2*Math.sin(Math.PI*(1/6))*hexR}
                    L ${cx}, ${cy}
                    l 0, ${-hexR}
                    L ${cx + Math.sin(Math.PI/3)*hexR}, ${cy - Math.sin(Math.PI/6)*hexR}
                    M ${cx}, ${cy - hexR}
                    L ${cx - Math.sin(Math.PI/3)*hexR}, ${cy - Math.sin(Math.PI/6)*hexR}
                    L ${cx}, ${cy}
                    L ${cx - Math.sin(Math.PI/3)*hexR}, ${cy + Math.sin(Math.PI/6)*hexR}
                    L ${cx - Math.sin(Math.PI/3)*hexR}, ${cy - Math.sin(Math.PI/6)*hexR}
                    M ${cx - Math.sin(Math.PI/3)*hexR}, ${cy + Math.sin(Math.PI/6)*hexR}
                    L ${cx}, ${cy + hexR}
            `)
        .attr('stroke', 'black')
        .attr('fill', '#f1f1ec')

    // Lo rellenamos
    svg.append('path')
        .attr('d', `M ${cx}, ${cy}
                    l 0, ${-hexR*(data['hp']/maxStats['hp'])}
                    L ${cx + Math.sin(Math.PI/3)*hexR*(data['attack']/maxStats['attack'])}, ${cy - Math.sin(Math.PI/6)*hexR*(data['attack']/maxStats['attack'])}
                    L ${cx + Math.sin(Math.PI/3)*hexR*(data['defense']/maxStats['defense'])}, ${cy + Math.sin(Math.PI/6)*hexR*(data['defense']/maxStats['defense'])}
                    L ${cx}, ${cy + hexR*(data['speed']/maxStats['speed'])}
                    L ${cx - Math.sin(Math.PI/3)*hexR*(data['sp_defense']/maxStats['sp_defense'])}, ${cy + Math.sin(Math.PI/6)*hexR*(data['sp_defense']/maxStats['sp_defense'])}
                    L ${cx - Math.sin(Math.PI/3)*hexR*(data['sp_attack']/maxStats['sp_attack'])}, ${cy - Math.sin(Math.PI/6)*hexR*(data['sp_attack']/maxStats['sp_attack'])}
                    L ${cx}, ${cy - hexR*(data['hp']/maxStats['hp'])}
        `)
        .attr('fill', () => {
            if (data["total_points"] >= 700){
                return spiderColor["bigger"];
            }
            return spiderColor[Math.floor(parseInt(data["total_points"])/100)*100]
        })
        .attr('opacity', '0.8')
        .attr('stroke', () => {
            if (data["total_points"] >= 700){
                return spiderColor["bigger"];
            }
            return spiderColor[Math.floor(parseInt(data["total_points"])/100)*100]
        })
        .attr('stroke-width', '1')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', cx) 
        .attr('y', cy - hexR - 2)
        .text(`${data['hp']}`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', cx) 
        .attr('y', cy - r + 15)
        .text(`HP`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'end')
        .attr('x', cx + r - 20) 
        .attr('y', cy - Math.sin(Math.PI/6)*r + 20)
        .text(`${data['attack']}`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'end')
        .attr('x', cx + r - 20) 
        .attr('y', cy - Math.sin(Math.PI/6)*hexR - 7)
        .text(`Att`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'start')
        .attr('x', cx - r + 18) 
        .attr('y', cy - Math.sin(Math.PI/6)*r + 20)
        .text(`${data['sp_attack']}`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'start')
        .attr('x', cx - r + 18) 
        .attr('y', cy - Math.sin(Math.PI/6)*hexR - 7)
        .text(`Sp. Att`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'end')
        .attr('x', cx + r - 20) 
        .attr('y', cy + Math.sin(Math.PI/6)*hexR + 2)
        .text(`${data['defense']}`)
        .attr('font-size', 10)
        .attr('fill', 'bl10ack')

    svg.append('text')
        .attr('text-anchor', 'end')
        .attr('x', cx + r - 20) 
        .attr('y', cy + Math.sin(Math.PI/6)*hexR -8)
        .text(`Def`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'start')
        .attr('x', cx - r + 15) 
        .attr('y', cy + Math.sin(Math.PI/6)*hexR + 2)
        .text(`${data['sp_defense']}`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'start')
        .attr('x', cx - r + 5) 
        .attr('y', cy + Math.sin(Math.PI/6)*hexR - 8)
        .text(`Sp. Def`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', cx) 
        .attr('y', cy + hexR + 22)
        .text(`${data['speed']}`)
        .attr('font-size', 10)
        .attr('fill', 'black')

    svg.append('text')
        .attr('text-anchor', 'middle')
        .attr('x', cx) 
        .attr('y', cy + hexR + 10)
        .text(`Speed`)
        .attr('font-size', 10)
        .attr('fill', 'black')

}