import React from "react";
import { useFieldArray } from "react-hook-form";


export default ({ cardIndex, control, register }) => {
  const { fields, remove } = useFieldArray({
    control,
    name: `test[${cardIndex}].cardArray`
  });

  return (
    <div>

      {fields.map((item, k) => {
        return (
          <div key={item.id} style={{ marginLeft: 20 }}>
            <label>카드:</label>
            <input
              {...register(`test[${cardIndex}].cardArray[${k}].field1`, {
                required: true
              })}
              style={{ marginRight: "25px" }}
            />

            <input
              {...register(`test[${cardIndex}].cardArray[${k}].field2`)}
            />
            <button type="button" onClick={() => remove(k)}>
              삭제
            </button>
          </div>
        );
      })}


      <hr />
    </div>
  );
};
