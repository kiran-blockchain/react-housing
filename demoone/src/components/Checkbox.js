
import { useState } from "react"
import { residentialProperty } from "../data/content";
const Checkbox = () => {
    const [selectedItems, setItems] = useState(['1BHK','2BHK']);
    return (
        <div>  {residentialProperty.map(x => {
            return <div class="form-check form-check-inline">
                <input class="form-check-input" type="checkbox"
                checked={selectedItems.indexOf(x.occupancy)>-1}
                 value={x.occupancy}
                 onChange={
                    e=>{
                        let updatedList  = [...selectedItems];
                        if(e.target.checked){
                           updatedList = [...selectedItems,e.target.value];
                        }
                        else{
                            //remove the item from the list
                            let indexOfSelecteItem = selectedItems.indexOf(e.target.value);
                            updatedList.splice( indexOfSelecteItem,1);
                        }
                        setItems(updatedList);
                    }
                }/>
                <label class="form-check-label" for="inlineCheckbox1">{x.occupancy}</label>
            </div>
            

        })}
        <h5>{JSON.stringify(selectedItems)}</h5>
        </div>
    )
}

export default Checkbox;