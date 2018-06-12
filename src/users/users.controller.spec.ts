import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let usersController: UsersController;
  let usersService: UsersService;
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    usersController = module.get<UsersController>(UsersController);

  });
  it('should be defined', () => {
    //const controller: UsersController = module.get<UsersController>(UsersController);
    expect(usersController).toBeDefined();
    expect(usersService).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const result = ['test'];
      jest.spyOn(usersService, 'findAll').mockImplementation(() => result);
      expect(await usersController.findAll()).toBe(result);
    });
  });


});

