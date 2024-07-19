import { CellsPage } from '@cells/cells-page';
import { html, css } from 'lit-element';
import '@cells-demo/demo-app-template/demo-app-template.js';
import '@bbva-web-components/bbva-web-link/bbva-web-link.js';
import '@bbva-experience-components/bbva-button-default/bbva-button-default';
import '@cells-demo/demo-app-container/demo-app-container.js';

class ContactMePage extends CellsPage {

  static get is() {
    return 'contactme-page';
  }

  static get properties() {
    return {
      title: { type: String },
      listHobbies: { type: Array },
      hobbies: { type: String },
      skills: { type: Array },
      favoriteQuotes: { type: Array }
    };
  }


  constructor() {
    super();
    this.title = 'Contact Me';
    this.hobbies = 'Hobbies';
    this.listHobbies = ['Leer', 'Ver Deportes', 'Viajar', 'Hacer Ejercicio', 'Aprender Cosas Nuevas'];
    this.skills = ['Programación en JavaScript', 'Desarrollo Web', 'Ingeniería Mecánica', 'Trabajo en Equipo', 'Resolución de Problemas'];
    this.favoriteQuotes = [
      'La vida es lo que pasa mientras estás ocupado haciendo otros planes. - John Lennon',
      'El único modo de hacer un gran trabajo es amar lo que haces. - Steve Jobs',
      'El éxito es la suma de pequeños esfuerzos repetidos día tras día. - Robert Collier'
    ];
  }


  render() {
    return html`
      <demo-app-template data-cells-type="template">
        <div slot="app-main-content" class="container">
          <h3>${this.title}</h3>
          <bbva-button-default @click=${this.gotoHome} class="evolutions-button" text="Regresar"></bbva-button-default>
          <p>Descripción:</p>
          <p>
            Soy Ingeniero Mecánico, en busca de oportunidades para adquirir
            experiencia práctica en desarrollo de software que permita mi
            crecimiento intelectual y desarrollar mis conocimientos técnicos.
            Destaco por habilidades analíticas, capacidad para el trabajo en 
            equipo y una actitud proactiva de autoaprendizaje.
          </p>
          <h3>${this.hobbies}</h3>
          <ol>
            ${this.listHobbies ? this.listHobbies.map((hobbie) => html`
              <li>${hobbie}</li>
            `) : ''}
          </ol>
          <h3>Habilidades</h3>
          <ul>
            ${this.skills ? this.skills.map((skill) => html`
              <li>${skill}</li>
            `) : ''}
          </ul>
          <h3>Frases Favoritas</h3>
          <ul>
            ${this.favoriteQuotes ? this.favoriteQuotes.map((quote) => html`
              <li>"${quote}"</li>
            `) : ''}
          </ul>
          <div class="link-buttons">
            <bbva-button-default class="evolutions-button" text="LinkedIn" @click=${this.gotoLinkedIn}></bbva-button-default>
            <bbva-button-default class="evolutions-button" text="GitHub" @click=${this.gotoGitHub}></bbva-button-default>
          </div>
        </div>
      </demo-app-template>
    `;
  }


  gotoHome() {
    this.navigate('home');
  }

}
window.customElements.define(ContactMePage.is, ContactMePage);