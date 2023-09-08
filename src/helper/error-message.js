const throwErrorMessage = (errorCode) => {
  switch (errorCode) {
    case "auth/email-already-in-use":
      throw new Error("Diese E-Mail Adresse existiert bereits.");

    case "auth/invalid-email":
      throw new Error("Diese E-Mail-Adresse ist nicht korrekt.");

    case "auth/user-not-found":
      throw new Error("Diese E-Mail Adresse existiert nicht.");

    case "auth/wrong-password":
      throw new Error("Dieses Passwort existiert nicht.");

    default:
      throw new Error(
        "Es ist ein unbekannter Fehler aufgetreten. Bitte versuchen Sie es noch einmal."
      );
  }
};

export { throwErrorMessage };
