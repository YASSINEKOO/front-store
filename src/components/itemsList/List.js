/*
import React, {useState} from "react";
import {ListDemo} from "./List.Styled";
import Card from "../Card";
import SearchBar from "../searchBar/SearchBar";

    const List = ({searchValue}) => {
        const apps = [
            {
                title: "App 1",
                icon: "",
            },
            {
                title: "App 2",
                icon: "",
            },
            {
                title: "App 3",
                icon: "",
            },
            {
                title: "App 32",
                icon: "",
            },
        ];


        const filteredApps = apps.filter((app) => {
            return app.title.toLowerCase().includes(searchValue.toLowerCase());
        });

    return (
        <div>
            <ListDemo>
                {filteredApps.map((app, index) => (
                    <Card key={index} title={app.title} icon={app.icon} />
                ))}
            </ListDemo>
        </div>

    )
}

export default List;

*/
