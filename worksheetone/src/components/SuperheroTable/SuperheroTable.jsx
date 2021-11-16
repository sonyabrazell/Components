import React, {Component} from 'react';
import ReactTable from "react-table";

class Table extends Component {
    render(){
        const data = [{
            superheroId: 1,
            name: 'Batman',
            primaryAbility: 'Wealthy',
            secondarAbility: 'Rich'
            },
            {
            superheroId: 2,
            name: 'Superman',
            primaryAbility: 'Super strength',
            secondarAbility: 'Fly'
            },
            {
            superheroId: 3,
            name: 'Spiderman',
            primaryAbility: 'Spider senses',
            secondarAbility: 'Shoots web'
            }
        ];

        const columns = [{
            header: 'Superhero Name',
            accessor: 'Primary Ability',
            accessor: 'Secondary Ability',
            id: 'Superhero ID'
            },{
            header: 'Superhero Name',
            accessor: 'Primary Ability',
            accessor: 'Secondary Ability',
            id: 'Superhero ID'
            },{
            header: 'Superhero Name',
            accessor: 'Primary Ability',
            accessor: 'Secondary Ability',
            id: 'Superhero ID'
            },{
        }]
    }}
        return (
            <div>
                <ReactTable
                data = {data}
                columns = {columns}
                defaultPageSize = {4}
                />
            </div>
        )
export default Table;