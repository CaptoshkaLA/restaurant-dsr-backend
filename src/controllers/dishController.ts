import { Request, Response } from 'express';
import * as dishService from '../services/dishService';
import { CreateDishDTO, UpdateDishDTO } from '../dtos/dishDTO';

export const getMenu = async (req: Request, res: Response) => {
  try {
    const menu = await dishService.getMenu();
    res.json(menu);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось загрузить меню' });
  }
};

export const addDish = async (req: Request, res: Response) => {
  const dishDTO: CreateDishDTO = req.body;

  try {
    const dish = await dishService.addDish(dishDTO);
    res.status(201).json(dish);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось создать блюдо' });
  }
};

export const updateDish = async (req: Request, res: Response) => {
  const { id } = req.params;
  const dishDTO: UpdateDishDTO = req.body;

  try {
    const dish = await dishService.updateDish(Number(id), dishDTO);
    res.json(dish);
  } catch (error) {
    res.status(500).json({ error: 'Не удалось обновить блюдо' });
  }
};

export const deleteDish = async (req: Request, res: Response) => {
  const { id } = req.params;

  try {
    await dishService.deleteDish(Number(id));
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: 'Не удалось удалить блюдо'});
  }
};
