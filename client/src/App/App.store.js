import { observable, action } from "mobx";
import results from './ContentContainer/ResultPage/results.json';

export default class AppStore {
  @observable content = 'landing';
  @observable filter_keywords = '';
  @observable language = 'English';
  @observable displayed_results = results;

  @action change_language(event) {
    if (this.language == 'English'){
      this.language = 'Español'
      const spanish_results = [
        {
          'Name':'Upwardly Global',
          'Description': 'Upwardly Global elimina la barreras que refugiados e inmigrantes cualificados enfrentan durante la bœsqueda de empleo, integrando esta poblaci—n al mercado laboral de los Estados Unidos. TambiŽn proveemos ayuda y entrenamiento personalizado a los nuevos Americanos, d‡ndoles justas oportunidades de encontrar opciones que requieran las habilidades apropiadas, proveyŽndoles oportunidades de lograr una estabilidad econ—mica en los Estados Unidos.'
        },
        {
          'Name':'CAMBA',
          'Description': 'CAMBA ayuda a individuos, familias y comunidades desde un punto de vista de comprensi—n, ofreciŽndoles programas integrales en: Desarrollo Econ—mico, Educaci—n y Desarrollo de J—venes, Apoyo a la Familia, Salud, Casa, y Servicios Legales. Nuestro programa establece comunidades inclusivas donde los Neoyorkinos encuentran el soporte necesario para desarrollar completamente sus potencialidades'
        },
        {
          'Name':'Accounting Jobs Ahora',
          'Description': 'Accounting Jobs Today es un recurso para encontrar carreras profesionales relacionadas con contabilidad y finanzas en todo el pa’s. Adem‡s, de certificaciones necesarias para ejercer trabajos como contador y las herramientas para encontrar trabajo, ofrecemos diversos recursos, incluyendo descripciones de trabajos como contador, curriculum vitae para contadores, comentarios y evaluaciones de trabajos existentes, y oportunidades para continuar estudiando dentro de la rama de la contabilidad.'
        },
        ]
      this.displayed_results = spanish_results
    } else {
      this.language = 'English'
      this.filter_results()
    }

  }

  @action filter_results() {
  	this.displayed_results = results.filter(function (result) {
    	return (result['Name'].includes(this.filter_keywords) || result['Description'].includes(this.filter_keywords));
	}, this);
  }

  @action update_text(text) {
  	this.filter_keywords = text;
  }

  @action start() {
    this.content = 'background';
  }

  @action choose_background() {
  	this.content = 'results';
  }
}