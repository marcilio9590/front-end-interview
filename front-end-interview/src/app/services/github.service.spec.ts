import { TestBed } from '@angular/core/testing';
import { GithubService } from './github.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('GithubService', () => {
  let service: GithubService;
  let httpMock: HttpTestingController;
  const user = { id: 19561456, name: 'Marcilio Cobel' }
  const repos = [{ id: 174854575, name: 'Angular' }, { id: 181575608, name: 'Angular7-Udemy' }];
  const starred = [{ id: 144657615, name: 'unform' }, { id: 15428480, name: 'AdminLTE' }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GithubService]
    })
    service = TestBed.get(GithubService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('Obter dados do usuario do github', () => {
    service.getUserData('marcilio9590').subscribe(res => {
      expect(res).toEqual(user);
    });
    const req = httpMock.expectOne(`${service.base_url}/marcilio9590`);
    execRequest(req, user, httpMock);
  });

  it('Obter repositorios do usuario do github', () => {
    service.getReposUser('marcilio9590').subscribe(res => {
      expect(res.length).toBe(2);
      expect(res[0].id).toEqual(174854575);
      expect(res[0].name).toEqual('Angular');
      expect(res[1].id).toEqual(181575608);
      expect(res[1].name).toEqual('Angular7-Udemy');
    });
    const req = httpMock.expectOne(`${service.base_url}/marcilio9590/repos`);
    execRequest(req, repos, httpMock);
  });

  it('Obter repos starred do usuario do github', () => {
    service.getStarredUser('iltonkp').subscribe(res => {
      expect(res.length).toBe(2);
      expect(res[0].id).toEqual(144657615);
      expect(res[0].name).toEqual('unform');
      expect(res[1].id).toEqual(15428480);
      expect(res[1].name).toEqual('AdminLTE');
    });
    const req = httpMock.expectOne(`${service.base_url}/iltonkp/starred`);
    execRequest(req, starred, httpMock);
  });

});

function execRequest(req, res, httpMock: HttpTestingController) {
  expect(req.request.method).toBe('GET');
  req.flush(res);
  httpMock.verify();
}
