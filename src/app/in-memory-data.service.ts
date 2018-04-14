import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
	createDb() {
		const trains = [
			{ id: 11, name: 'Turku-Helsinki' },
			{ id: 12, name: 'Helsinki-Turku' },
			{ id: 13, name: 'Turku-Tampere' },
			{ id: 14, name: 'Tampere-Turku' },
			{ id: 15, name: 'Turku-Oulu' },
			{ id: 16, name: 'Oulu-Turku' },
			{ id: 17, name: 'Turku-Kokkola' },
			{ id: 18, name: 'Kokkola-Turku' }
			];
			return{trains};
		}
	}
			