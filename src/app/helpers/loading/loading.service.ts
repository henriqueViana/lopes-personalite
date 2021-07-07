import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private isLoading = false

  constructor(private loadingController: LoadingController) { }

  public present(message: string = 'Carregando...'): void {
    this.isLoading = true
    this.loadingController
      .create({ message })
      .then(loader => {
        loader.present().then(() => {
          if (!this.isLoading) {
            loader.dismiss()
          }
        })
      })
  }

  public dismiss(): void {
    this.isLoading = false
    this.loadingController
      .getTop()
      .then(loader => loader && loader.dismiss())
  }
}
