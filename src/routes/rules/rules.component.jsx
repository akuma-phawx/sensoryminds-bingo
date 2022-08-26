import './rules.styles.scss';
const Rules = () => {
  return (
    <section className="nes-container rules-container">
      <section className="message-list">
        <section className="message -left">
          <i className="nes-kirby"></i>
          <div className="nes-balloon from-left">
            <p>Welcome to Pokemon Version of Bingo.</p>
          </div>
        </section>

        <section className="message -right">
          <div className="nes-balloon from-right">
            <div className="lists">
              <ul className="nes-list is-circle">
                <li>Start at the same time</li>
                <li>If your Pkmn dies release it</li>
                <li>Only 1 HM can be taught per Pkmn</li>
              </ul>
            </div>
          </div>
          <i className="nes-charmander"></i>
        </section>
      </section>
    </section>
  );
};

export default Rules;
