import { Component } from '@angular/core';
import { Coin } from 'src/app/models/coin';
import { CoinService } from 'src/app/services/coin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  coins: Coin[] = [];
  selectedCoin: Coin = null;

  constructor(private coinService: CoinService) { }

  ngOnInit(): void {
    this.loadCoins();
  }

  loadCoins(): void {
    this.coinService.getAllCoins().subscribe((coins) => {
      this.coins = coins;
    });
  }

  selectCoin(coinId: number): void {
    this.selectedCoin = this.coins.find(x => x.id == coinId)
  }

  editCoin() {

  }

  deleteCoin() {

  }
}
