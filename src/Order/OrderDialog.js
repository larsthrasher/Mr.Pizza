import React from 'react';
import {Dialog, DialogContent, DialogShadow, DialogFooter, ConfirmButton} from "../FoodDialog/FoodDialog";

export function OrderDialog({openOrderDialog, setOpenOrderDialog, setOrders}){
  return openOrderDialog ? <>
    <DialogShadow/>
    <Dialog>
      <DialogContent>
        <h2>🚚 Your order is on the way! </h2>
        <p>
          You have been emailed confirmation of your order. Thanks for choosing Mr. Pizzaaaa, dude.
        </p>
      </DialogContent>
      <DialogFooter>
        <ConfirmButton onClick={() => {
          setOrders([]);
          setOpenOrderDialog();
        }}>
          I'M STILL HUNGRY
        </ConfirmButton>
      </DialogFooter>
    </Dialog>
  </> : <div/>
}
