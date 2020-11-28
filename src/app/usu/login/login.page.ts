import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/usuario/autenticacao.service';
import { Router } from '@angular/router';
import { MenuController, NavController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  public email: string = "";
  public senha: string = "";
  public mensagem: string ="";

  constructor(
    public autenticacaoService: AutenticacaoService,
    public router: Router,
    public toastController: ToastController,
    public nav: NavController,
    public menu: MenuController
  ) { }

  InsereUsuario(){
    this.nav.navigateForward("cadastro");
  }

  ngOnInit() {
  }

  loginUsuario() {
    this.autenticacaoService.loginNoFirebase(this.email, this.senha)
      .then((res) => {
        this.router.navigate(['home']);
      }).catch((error) => {
        this.mensagem = "E-mail e/ou Senha incorreto(s)"
        this.exibeMensagem();
      })

      
  }
  async exibeMensagem() {
    const toast = await this.toastController.create({
      message: this.mensagem,
      duration: 2000
    });
    toast.present();
  }

  ionViewDidEnter(){
    this.menu.enable(false);

  }
  ionViewWillLeave(){
    this.menu.enable(true);
  }

  }


