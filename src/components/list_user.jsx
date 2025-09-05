import React from "react";
import '../App.css';

class User_list extends React.Component
{
    render(){
        const lists = [
            { id: 1, name: 'Ayush', Age: 19 },
            { id: 2, name: 'Jay', Age: 20 },
            { id: 3, name: 'Jenil', Age: 28 },
        ];

        const finle_list = lists.map(list => 
            <li key = {list.id}  > {list.name} ------ {list.Age}</li>
        );
        return (
            <ul className="list" > {finle_list} </ul>
        );
    }
}
export default User_list;