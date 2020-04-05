import React from "react";

const Row = ({text, amount}) => (
    <tr>
        <td>{text}</td>
        <td>{amount}</td>
    </tr>
)

export const Statistics = ({data}) => {
    if(data[0]+data[1]+data[2] === 0) {
        return(
            <>
                <h2>statistics</h2>
                No feedback given
            </>
        )
    }
    
    return (
        <div>
            <h2>statistics</h2>
            <table><tbody>
                <Row text="Good" amount={data[0]}/>
                <Row text="Neutral" amount={data[1]}/>
                <Row text="Bad" amount={data[2]}/>
                <Row text="Total" amount={data[0]+data[1]+data[2]}/>
                <Row text="Average" amount={(data[0]-data[2])/(data[0]+data[1]+data[2])}/>
                <Row text="Positive" amount={data[0]/(data[0]+data[1]+data[2])*100+"%"}/>
            </tbody></table>
        </div>
    )
}