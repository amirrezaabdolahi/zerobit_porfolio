import { TeamMember } from "@/types/team";

type Props = {
  member: TeamMember;
};

export default function MemberCard({ member }: Props) {
  return (
    <article className="group rounded-2xl border bg-card p-6 transition-all hover:-translate-y-1 hover:bg-accent">
      <span className="font-mono text-xs text-muted-foreground">
        {member.id}
      </span>

      <h3 className="mt-6 text-xl font-semibold">{member.name}</h3>

      <p className="mt-1 text-sm text-muted-foreground">{member.role}</p>

      <p className="mt-5 text-sm leading-7 text-muted-foreground">
        {member.description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {member.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-md border px-2 py-1 font-mono text-xs text-muted-foreground"
          >
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
}
