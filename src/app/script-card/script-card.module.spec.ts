import { ScriptCardModule } from './script-card.module';

describe('ScriptCardModule', () => {
  let scriptCardModule: ScriptCardModule;

  beforeEach(() => {
    scriptCardModule = new ScriptCardModule();
  });

  it('should create an instance', () => {
    expect(scriptCardModule).toBeTruthy();
  });
});
