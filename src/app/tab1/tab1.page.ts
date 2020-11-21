import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { GroceriesServiceService } from '../groceries-service.service';
import { InputDialogServiceService } from '../input-dialog-service.service';
/*added to enable social sharing on native device, also injected into constructor*/
import { SocialSharing } from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery App"


  constructor(public toastController: ToastController, public alertController: AlertController, public dataService: GroceriesServiceService, public inputDialogService: InputDialogServiceService, public socialSharing: SocialSharing) {

  }

  loadItems() {
    return this.dataService.getItems();
  }

  async removeItem(item, index) {
    console.log("Removing Item = ", item, index);
    const toast = await this.toastController.create({
      message: 'Removing ' + item.name + '...',
      duration: 2000
    });
    toast.present();

    this.dataService.removeItem(index);
  }

  async shareItem(item, index, slidingItem) {
    console.log("Sharing Item = ", item, index);
    const toast = await this.toastController.create({
      message: 'Sharing ' + item.name + '...',
      duration: 2000
    });
    toast.present();

    /*needed to close the sliding items*/
    slidingItem.close();

    let message = "Name: " + item.name + "  Quantity: " + item.quantity;
    let subject = "Shared vis Groceriers App";

    this.socialSharing.share(message, subject).then(() => {
      // Sharing via email is possible
      console.log("shared successfully!");
    }).catch((error) => {
      // Sharing via email is not possible
      console.error("Error while sharing ", error);
    });

  }

  /*slidingItem included to enable the item to slide back when done, name commes from HTML*/
  async editItem(item, index, slidingItem) {
    console.log("Edit Item = ", item, index);
    const toast = await this.toastController.create({
      message: 'Editing ' + item.name + '...',
      duration: 2000
    });
    toast.present();

    console.log("Editing Item");
    this.inputDialogService.showPrompt(item, index, slidingItem);
    

  }
  

  async addItem() {
    console.log("Adding Item");
    this.inputDialogService.showPrompt();
  }

  

}
