import Firebase from 'firebase';
import { firebaseUlr, users, products } from './../constants/constants'
import { REGISTER_USER } from './DBActionTYpes';

const baseRef  = new Firebase(firebaseUlr);
const usersRef = baseRef.child(users);
const prodsRef = baseRef.child(products);
