import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';



describe('GithubService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [GithubService]
  }));

  it('should be created', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service).toBeTruthy();
  });

  it('Obetendo Repositórios', () => {
    const service: GithubService = TestBed.get(GithubService);
    expect(service.getUserData('marcilio9590')).toBeTruthy();
  });
});