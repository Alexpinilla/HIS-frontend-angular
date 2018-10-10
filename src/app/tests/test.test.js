import { StateManagerService } from '../state-manager.service';

describe('. FuncionesstateManager', () => {
    test('.estado()', () => {
        let stateManager = new StateManagerService();
        stateManager.estado = jest.fn(stateManager.estado)
        expect(stateManager.estado).toBe(localStorage.getItem('nombreusuario'))

    })
})