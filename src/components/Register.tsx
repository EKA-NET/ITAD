import '../styles/Register.scss'

export const Register = () => {
  return (
    <section className="register-container">
      <h3 className="register-header">Nie czekaj, zapisz się na ITAD!</h3>
      
      <div className="register-desc">
        Pierwsze 100 osób, które przyjdzie na wydarzenie otrzyma starter pack z
        gadżetami!
        <br />
        Formularz rejestracji dostępny jest pod przyciskiem poniżej
      </div>
      <a href="https://forms.gle/gPkGk2KDxd8xeLDp9" className="register-button">Rejestracja</a>
    </section>
  );
};