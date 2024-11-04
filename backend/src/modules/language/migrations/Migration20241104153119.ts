import { Migration } from '@mikro-orm/migrations'

export class Migration20241104153119 extends Migration {
  async up(): Promise<void> {
    this.addSql(
      'create table if not exists "language" ("id" text not null, "code" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "language_pkey" primary key ("id"));',
    )
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "language" cascade;')
  }
}
