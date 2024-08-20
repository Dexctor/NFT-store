import { Schema, model, models } from 'mongoose';

const userSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: [true, "L'email est requis"],
    match: [/^\S+@\S+\.\S+$/, 'Veuillez fournir un email valide'],
  },
  username: {
    type: String,
    required: [true, "Le nom d'utilisateur est requis"],
    minlength: [3, "Le nom d'utilisateur doit contenir au moins 3 caractères"],
  },
  password: {
    type: String,
    required: [true, 'Le mot de passe est requis'],
    minlength: [6, 'Le mot de passe doit contenir au moins 6 caractères'],
  },
});

const User = models.User || model('User', userSchema);

export default User;