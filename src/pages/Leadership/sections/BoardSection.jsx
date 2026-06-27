import { BOARD_MEMBERS } from '../../../data/leadershipData';

const EMAIL_ICON_PATH =
  'M160-160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v480q0 33-23.5 56.5T800-160H160Zm320-280L160-640v400h640v-400L480-440Zm0-80 320-200H160l320 200ZM160-640v-80 480-400Z';

function EmailIcon() {
  return (
    <svg viewBox="0 -960 960 960" aria-hidden="true">
      <path d={EMAIL_ICON_PATH} />
    </svg>
  );
}

function MemberCard({ member }) {
  return (
    <article className="member reveal">
      <div className="member__photo">
        <img
          src={member.photo}
          alt={member.photoAlt}
          style={{ objectPosition: member.photoPosition }}
        />
      </div>
      <h3 className="member__role">{member.role}</h3>
      <p className="member__name">{member.name}</p>
      <p className="member__meta">{member.line}</p>
      <a className="member__link" href={`mailto:${member.email}`}>
        <EmailIcon />
        Email
      </a>
    </article>
  );
}

export function BoardSection() {
  return (
    <section className="board" id="board">
      <div className="board__inner">
        <div className="board__grid">
          {BOARD_MEMBERS.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
