import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

const AnswerCell = ({ rowData }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [answer, setAnswer] = useState(rowData.answer);

    const handleAnswerChange = (event) => {
        setAnswer(event.target.value);
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        // TODO: Save the updated answer to the backend
        setIsEditing(false);
    };

    return (
        <div className="p-d-flex p-ai-center">
            {isEditing ? (
                <>
                    <InputText value={answer} onChange={handleAnswerChange} />
                    <Button
                        icon="pi pi-check"
                        className="p-button-text p-button-rounded"
                        onClick={handleSaveClick}
                    />
                </>
            ) : (
                <>
                    <div className="p-text-bold">{rowData.answer}</div>
                    <Button
                        icon="pi pi-pencil"
                        className="p-button-text p-button-rounded"
                        onClick={handleEditClick}
                    />
                </>
            )}
        </div>
    );
};

export default AnswerCell;