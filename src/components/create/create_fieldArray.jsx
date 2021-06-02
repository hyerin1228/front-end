import React from "react";
import { useFieldArray } from "react-hook-form";
import CardArray from "./crate_cardFieldArray";

let renderCount = 0;

export default function Fields({ control, register, setValue, getValues }) {
    const { fields, append, remove } = useFieldArray({
        control,
        name: "test"
    });

    renderCount++;

    return (
        <>
            <ul>
                <li>
                    <div>
                        <label>카드세트 이름:</label>
                        <input />
                        <label>설명:</label>
                        <input />
                    </div>
                </li>
                {fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <CardArray cardIndex={index} {...{ control, register }} />
                        </li>
                    );
                })}
            </ul>

            <section>
                <button
                    type="button"
                    onClick={() => {
                        setValue("test", [
                            ...(getValues().test || []),
                            {
                                name: "append",
                                cardArray: [{ field1: "", field2: "" }]
                            }
                        ]);
                    }}
                >
                    카드 추가
        </button>

            </section>

        </>
    );
}
