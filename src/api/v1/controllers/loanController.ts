import { Request, Response } from "express";

export const getLoans = (req: Request, res: Response) => {
  res.json({ message: "All high-risk loans retrieved successfully" });
};

export const createLoan = (req: Request, res: Response) => {
  res.json({ message: "Loan created successfully" });
};

export const getLoanById = (req: Request, res: Response) => {
  res.json({ message: `Loan details for ID ${req.params.id}` });
};

export const updateLoan = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} updated successfully` });
};

export const deleteLoan = (req: Request, res: Response) => {
  res.json({ message: `Loan ${req.params.id} deleted successfully` });
};
